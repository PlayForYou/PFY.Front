// app/room/[id]/layout.tsx
import {ReactNode} from 'react'

export default function RoomLayout({ children }: { children: ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}