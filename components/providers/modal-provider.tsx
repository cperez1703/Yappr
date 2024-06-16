"use client";

import { useEffect, useState } from "react";

import { CreateServerModal } from "@/components/modal/create-server-modal";
import { InviteModal } from "@/components/modal/invite-modal";
import { EditServerModal } from "@/components/modal/edit-server-modal";
import { MembersModal } from "@/components/modal/members-modal";
import { CreateChannelModal } from "@/components/modal/create-channel-modal";
import { LeaveServerModal } from "@/components/modal/leave-server-modal";

export const ModalProvider = () => {
    const [isMounted,setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return null;
    }

    return (
        <>
            <CreateServerModal/>
            <InviteModal/>
            <EditServerModal/>
            <MembersModal/>
            <CreateChannelModal/>
            <LeaveServerModal/>
        </>
    )
}