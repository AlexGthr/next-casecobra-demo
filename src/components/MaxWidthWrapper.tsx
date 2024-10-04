import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

// Définition du composant fonctionnel 'MaxWidthWrapper'.
// Il accepte deux props : 'className' (optionnelle) et 'children' (obligatoire).
const MaxWidthWrapper = ({
    className, // Classe CSS supplémentaire optionnelle passée au composant pour personnaliser le style.
    children, // Contenu enfant à rendre à l'intérieur du wrapper.
}: {
    className?: string // Déclaration du type pour 'className' comme une chaîne de caractères optionnelle.
    children: ReactNode // Déclaration du type pour 'children' comme un nœud React (éléments, fragments, etc.).
}) => {
  return (
    <div className={cn("h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper