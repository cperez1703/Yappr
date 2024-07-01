# Yappr

Welcome to the Yappr project! This application replicates many of the core functionalities of Discord, providing real-time messaging, voice and video calls, and extensive member management features.

## Features

- **Real-time Messaging**: Utilizes [Socket.io](https://socket.io/) for instant messaging.
- **Attachment Support**: Send attachments with messages using [UploadThing](https://uploadthing.com/).
- **Message Management**: Edit and delete messages in real time for all users.
- **Channels**: Create text, audio, and video call channels.
- **Private Conversations**: One-on-one conversations and video calls between members.
- **Member Management**: Features for kicking members, changing roles (Guest/Moderator).
- **Invite System**: Generate unique invite links and manage invites.
- **Infinite Scrolling**: Messages load in batches of 10 using `@tanstack/query`.
- **Server Customization**: Create and customize servers.
- **Aesthetic UI**: Built with [TailwindCSS](https://tailwindcss.com/) and [ShadcnUI](https://shadcnui.com/).
- **Responsive Design**: Fully responsive and mobile-friendly UI.
- **Theme Support**: Light and dark modes available.
- **Websocket Fallback**: Polling with alerts as a fallback for websockets.
- **ORM**: [Prisma](https://www.prisma.io/) used for object-relational mapping.
- **Database**: MySQL database managed by [NeonDB](https://neon.tech/).
- **Authentication**: Secure authentication with [Clerk](https://clerk.dev/).

## Usage

- **Real-time Messaging**: Chat in real-time with other users in various channels.
- **Attachments**: Share files and media using the attachment feature.
- **Voice and Video Calls**: Initiate voice and video calls within channels or directly with members.
- **Server and Member Management**: Create servers, manage members, and customize your community space.

## Acknowledgements

- [Socket.io](https://socket.io/)
- [UploadThing](https://uploadthing.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [ShadcnUI](https://shadcnui.com/)
- [Prisma](https://www.prisma.io/)
- [NeonDB](https://neon.tech/)
- [Clerk](https://clerk.dev/)
