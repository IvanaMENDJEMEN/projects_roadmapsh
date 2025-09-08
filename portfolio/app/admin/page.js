'use client'

import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import '../../styles/AdminPage.css'

export default function AdminPage() {
    const { register, handleSubmit,reset,setValue, formState: { errors } } = useForm();
    const [message, setMessage] = useState(null);
    const [projets,setProjets] = useState([]); //Etat pour la liste des projets
    const [projetToEdit,setProjetToEdit] = useState(null); // État pour le projet à modifier
    const [isFormVisible, setIsFormVisible] = useState(false)
    const validatedRules = {
        titre: { required: "Le titre est requis." },
        fonctionnalites: { required: "Les fonctionnalites sont requises."},
        description: { required: "La description est requise." },
        technologies: { required: "Les technologies sont requises." },
        image: { required: "L'image est requise." },
        galerie: { required: "La galerie d'images est requise." }
    };

    // charge la liste des projets au demarrage du composant
    useEffect(() => {
        const fectchProjets = async () =>{
            try {
                const response = await fetch("/api/admin");
                if(!response.ok){
                    throw new Error(`Erreur lors de la recuperation des projets`, response.status);
                }
                const data = await response.json();
                setProjets(data);
            }catch(error){
                console.error('Erreur au fetch',error)
                setMessage({ type: "error", text: `Impossible de charger les projets : ${error.message}` });
            }
        }
        fectchProjets();
    },[])
    
    //Fonction pour gerer la selection d'un projet pour modification et pre-remplir le formulaire
    const handleEdit = (projet) => {
        setIsFormVisible(true)
        setProjetToEdit(projet);
        setValue("titre", projet.titre);
        setValue("sousTitre", projet.sousTitre || '');
        setValue("description", projet.description);
        setValue("fonctionnalites", projet.fonctionnalites.join(', '));
        setValue("technologies", projet.technologies.join(', '));
        setValue("demo", projet.demo || '');
        setValue("linkGithub", projet.linkGithub || '');
        setMessage(null);
    }
    //Fonction pour gerer la suppression d'un projet
    const handleDelete = async (projetId) => {
        if (!window.confirm("Êtes-vous sûr de vouloir supprimer ce projet ?")) {
            return;
        }
        try {
            const response = await fetch(`/api/admin/${projetId}`, {
                method: "DELETE",
            });
            if (response.ok) {
                setMessage({ type: "success", text: "Projet supprimé avec succès !" });
                setProjets(projets.filter(p => p.id !== projetId));
            } else {
                const errorData = await response.json();
                setMessage({ type: "error", text: `Erreur de suppression : ${errorData.message}` });
            }
        }catch (error) {
            setMessage({ type: "error", text: `Erreur de connexion a l'API (DELETE) : ${error.message}` });
        }
    }
    const handleCreate = () => {
        setProjetToEdit(null);
        reset();
        setIsFormVisible (true);
        setMessage(null);
    }
    const handleBack = () => {
        setIsFormVisible (false);
    }
    const onSubmit = async (data) => {
        setMessage(null);
        let method = 'POST';
        let url = '/api/admin'

        if (projetToEdit ){
            method = 'PUT';
            url = `/api/admin/${projetToEdit.id}`
        }else {
            console.error('projetId manquant')
            console.log('projet')
        }
        
        //Initialise les variables pour les URLs des images avec les valeurs existantes dans la bd 
        let mainImageUrl = projetToEdit?.image;
        let galerieUrls = projetToEdit?.galerie;

        //Verifier si de nouvelles images ont été selectionnées
        const hasNewImages = (data.image && data.image[0]) || (data.galerie && data.galerie.length > 0);

        //Si de nouvelles images ont été selectionnées, proceder a l'upload
        if (hasNewImages) {
            try {

                // Étape 1 : Création et envoi des FormData pour les images
                const imageFormData = new FormData();
                if (data.image && data.image[0]) {
                    imageFormData.append('files', data.image[0]);
                }
                if (data.galerie && data.galerie.length > 0) {
                    for (let i = 0; i < data.galerie.length; i++) {
                        imageFormData.append('files', data.galerie[i]);
                    }
                }

                // Envoi des images à l'API d'upload
                const uploadResponse = await fetch("/api/uploadImage", {
                    method: "POST",
                    body: imageFormData,
                });

                if (!uploadResponse.ok) {
                    const errorData = await uploadResponse.json();
                    return setMessage({ type: "error", text: `Erreur d'upload : ${errorData.error}` });
                }
                const uploadedData = await uploadResponse.json();

                // Mettre à jour les URLs avec les nouvelles URLs générées
                const [newMainImageUrl, ...newGalerieUrls] = uploadedData.urls;
                if (data.image && data.image[0]) {
                    mainImageUrl = newMainImageUrl;
                }
                if (data.galerie && data.galerie.length > 0) {
                    galerieUrls = newGalerieUrls;
                }
                
            } catch (error){
                console.error("Erreur lors de l'upload des images :", error);
                return setMessage({ type: "error", text: `Erreur de connexion API upload Image : ${error.message}` });
            }
         }

        
        try {
            // Création de l'objet de données JSON
            const projectData = {
                titre: data.titre,
                sousTitre: data.sousTitre,
                description: data.description,
                demo: data.demo,
                linkGithub: data.linkGithub,
                fonctionnalites: data.fonctionnalites.split(",").map(f => f.trim()),
                technologies: data.technologies.split(",").map(t => t.trim()),
                image: mainImageUrl,
                galerie: galerieUrls
            };
            const response = await fetch(url, {
                method: method,
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify(projectData),
            });

            if (response.ok) {
                setMessage({ type: "success", textCreation:"Projet créé avec succès !", textModification:"Modification du projet avec succès !" });
                reset(); // Réinitialise le formulaire
                setProjetToEdit(null); // Quitter le mode édition
                // Mettre à jour la liste après l'opération
                const updatedProjets = await fetch("/api/admin").then(res => res.json());
                setProjets(updatedProjets);
                setIsFormVisible(false);
            } else {
                const errorData = await response.json();
                setMessage({ type: "error", text: `Erreur de la reponse : ${errorData.message}`});
            }
        } catch (error) {
            console.log('Donnees',data)
            console.error("Erreur lors de la création du projet :", error);
            setMessage({ type: "error", text: `Erreur de connexion API upload Image  : ${error.message}` });
        }
    }
         

    return (
        <div className="admin-page"> 
            {!isFormVisible && (
                <div className="header-admin">
                    <button className="create-btn" onClick={handleCreate}>
                        Créer un projet
                    </button>
                </div>
            )}
            { isFormVisible ? (
                <>
                {message && <p className={`message ${message.type === 'success' ? 'success' : 'error'}`}>{projetToEdit ? message.textModification : message.textCreation}</p>}

                <form onSubmit={handleSubmit(onSubmit)} className="formulaire">
                    <h1 className="form-titre">{projetToEdit ? "Modifier un projet" : "Créer un nouveau projet"}</h1>
                    <div className="champ">
                        <label htmlFor="titre">Quel est le titre du projet ?</label>
                        <input type="text" id="titre" {...register("titre", validatedRules.titre)} />
                        {errors.titre && <p className="error-message">{errors.titre.message}</p>}
                    </div>
                    

                    <div className="champ">
                        <label htmlFor="sousTitre">Quel est le sous-titre ?</label>
                        <input type="text" id="sousTitre" {...register("sousTitre")} />
                    </div>

                    <div className="champ">
                        <label htmlFor="description">Description du projet </label>
                        <textarea id="description" {...register("description", validatedRules.description)}/>
                        {errors.description && <p className="error-message">{errors.description.message}</p>}
                    </div>
                
                    <div className="champ">
                        <label htmlFor="fonctionnalites">Quelles sont les différentes fonctionnalités ? (séparées par des virgules)</label>
                        <input type="text" id="fonctionnalites" {...register("fonctionnalites")} />
                        {errors.fonctionnalites && <p className="error-message">{errors.fonctionnalites.message}</p>}
                    </div>
                    
                    
                    <div className="champ">
                        <label htmlFor="technologies">Quelles sont les technologies qui ont été utilisées ? (séparées par des virgules)</label>
                        <input type="text" id="technologies" {...register("technologies", validatedRules.technologies)} />
                        {errors.technologies && <p className="error-message">{errors.technologies.message}</p>}
                    </div>
                    
                    <div className="champ">
                        <label htmlFor="image">Quel est le rendu principal ? (image) </label>
                        <input type="file" id="image" accept="image/*" {...register("image", validatedRules.image)} />
                        {errors.image && <p className="error-message">{errors.image.message}</p>}
                    </div>
                    
                    
                    <div className="champ">
                        <label htmlFor="galerie">Quelles sont les differentes interfaces ? (galerie d'images) (plusieurs)</label>
                        <input type="file" id="galerie" accept="image/*" multiple {...register("galerie", validatedRules.galerie)} />
                        {errors.galerie && <p className="error-message">{errors.galerie.message}</p>}
                    </div>
                    
                    
                    <div className="champ">
                        <label htmlFor="demo">Quel est lien de la démo ou du projet déployé ?</label>
                        <input type="url" id="demo" {...register("demo")} />
                    </div>
                    
                    <div className="champ">
                        <label htmlFor="linkGithub">Quel est lien du projet sur GitHub ? </label>
                        <input type="url" id="linkGithub" {...register("linkGithub")} />
                    </div>
                    <div className="btn-container">
                        <button type="submit" className="form-bouton">{projetToEdit ? "Mettre à jour le projet" : "Créer le projet"} </button>
                        {projetToEdit && (
                            <button type="button" onClick={() => { reset(); setProjetToEdit(null); setIsFormVisible(false) }} className="form-bouton modified"> Annuler la modification </button>
                        )}
                    </div>
                    
                </form>
                <button className="back-btn" onClick={handleBack}>
                    Retour à la page précédente
                </button>
                </>
            ) : (
                <div className="project-list">
                    <h2>Projets existants</h2>
                    <ul>
                        {projets.map((p) => (
                            <li key={p.id} className="project-item">
                                <span className="project-title-list">{p.titre}</span>
                                <div className="project-actions">
                                    <button className="project-list-edit-btn" onClick={() => handleEdit(p)}>Modifier</button>
                                    <button className="project-list-delete-btn" onClick={() => handleDelete(p.id)}>Supprimer</button>
                                </div>
                                
                            </li>
                        ))}
                    </ul>
                </div>
            )

            }
            
           
        </div>

    )
    
}