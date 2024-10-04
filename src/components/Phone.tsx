import { cn } from '@/lib/utils'
// 'HTMLAttributes' permet d'étendre les attributs HTML standards pour des éléments de type div.
import React, { HTMLAttributes } from 'react'

// Définition de l'interface 'PhoneProps' qui décrit les props acceptées par le composant 'Phone'.
// - 'imgSrc' : string (URL de l'image)
// - 'dark' : booléen
// - Cette interface étend 'HTMLAttributes<HTMLDivElement>', ce qui permet de passer d'autres attributs HTML directement à la balise 'div' (par exemple, style, id, etc.).
interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string
    dark?: boolean
}

// Définition du composant fonctionnel 'Phone' qui reçoit les props définies dans l'interface 'PhoneProps'.
const Phone = ({ imgSrc, className, dark = false, ...props}: PhoneProps) => {
  return (
    <div className={cn('relative pointer-events-none z-50 overflow-hidden', className)} {...props}>

        {/* Affichage d'une image de modèle de téléphone, selon la valeur de 'dark'. 
            Si 'dark' est vrai, on affiche une version avec des bords sombres, sinon, une version claire. */}
        <img 
            src={dark ? '/phone-template-dark-edges.png' : '/phone-template-white-edges.png'}
            className='pointer-events-none z-50 select-none' 
            alt="phone image" />
        
        <div className='absolute -z-10 inset-0'>
            <img 
                className='object-cover'
                src={imgSrc}
                alt='overlaying phone image' />
        </div>
    </div>
  )
}

export default Phone
