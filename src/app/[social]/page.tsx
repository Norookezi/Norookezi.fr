import { redirect } from 'next/navigation';

const socials: { [key: string]: string } = {
    'twitch': 'https://www.twitch.tv/norookezi',
    'discord': 'https://discord.gg/R8xutC2e5u',
    'instagram': 'https://www.instagram.com/norookezi',
    'bluesky': 'https://bsky.app/profile/norookezi.bsky.social',
    'github': 'https://github.com/norookezi',
    'linkedin': 'https://www.linkedin.com/in/timoth%C3%A9-anquetil-5220a5341/'
};

type PageProps = {
    params: { social: string }
};

export default async function Page({ params }: PageProps) {
    const { social } = await params;
    const url = socials[social];
    if (url) {
        redirect(url);
    }
    redirect('/');
}