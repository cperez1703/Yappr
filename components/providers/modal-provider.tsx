"use client";

import { useEffect, useState } from "react";

import { CreateServerModal } from "@/components/modal/create-server-modal";
import { InviteModal } from "@/components/modal/invite-modal";
import { EditServerModal } from "@/components/modal/edit-server-modal";
import { MembersModal } from "@/components/modal/members-modal";
import { CreateChannelModal } from "@/components/modal/create-channel-modal";
import { LeaveServerModal } from "@/components/modal/leave-server-modal";
import { DeleteServerModal } from "@/components/modal/delete-server-modal";
import { DeleteChannelModal } from "@/components/modal/delete-channel-modal";
import { EditChannelModal } from "@/components/modal/edit-channel-modal";
import { MessageFileModal } from "@/components/modal/message-file-modal";
import { DeleteMessageModal } from "@/components/modal/delete-message-modal";

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
            <DeleteServerModal/>
            <DeleteChannelModal/>
            <EditChannelModal/>
            <MessageFileModal/>
            <DeleteMessageModal/>
        </>
    )
}