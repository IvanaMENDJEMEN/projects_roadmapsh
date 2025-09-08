-- CreateTable
CREATE TABLE "Projet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "sousTitre" TEXT,
    "fonctionnalites" TEXT NOT NULL,
    "galerie" TEXT NOT NULL,
    "demo" TEXT,
    "description" TEXT NOT NULL,
    "technologies" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "linkGithub" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
