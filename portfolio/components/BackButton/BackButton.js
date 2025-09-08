'use client'
import { useRouter } from 'next/navigation'
import '../BackButton/BackButton.css'
import React from 'react'

export default function BackButton() {
    const router = useRouter()
  return (
    <div>
        <button className="back-button" onClick={() => router.back()}>← Retour aux projets</button>
    </div>
  )
}
