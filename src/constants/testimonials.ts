export type TagProps = {
    label: string;
    color: string;
    bg: string;
    icon: string;
};

export type Testimonial = {
    id: number;
    name: string;
    role: string;
    image: string;
    rating: number;
    text: string;
    manifestations: {
        tags: TagProps[];
        title: string;
    };
};

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah John",
        role: "Lifestyle Content Creator",
        image: "/images/avatar2.jpg",
        rating: 5,
        text: "Using this app truly helped me find clarity about my goals. Understand how challenging it can be to navigate them but this tool has made a significant difference for me.",
        manifestations: {
            title: "Manifestations",
            tags: [
                {
                    label: "Travel",
                    color: "#06BF37",
                    bg: "#E6F8EA",
                    icon: "/images/gb-logo.png",
                },
                {
                    label: "Career",
                    color: "#3C6BF6",
                    bg: "#EEF1FF",
                    icon: "/images/bb-Logo.png",
                },
            ],
        },
    },
    {
        id: 2,
        name: "Sarah John",
        role: "Lifestyle Content Creator",
        image: "/images/avatar2.jpg",
        rating: 5,
        text: "My goals are vibrant and attainable. I have a clear vision of them, develop strategic plans to achieve them, and make a consistent effort to work towards them each day.",
        manifestations: {
            title: "Manifestations",
            tags: [
                {
                    label: "Travel",
                    color: "#06BF37",
                    bg: "#E6F8EA",
                    icon: "/images/gb-logo.png",
                },
                {
                    label: "Career",
                    color: "#3C6BF6",
                    bg: "#EEF1FF",
                    icon: "/images/bb-Logo.png",
                },
                {
                    label: "Physique",
                    color: "#800080",
                    bg: "#F3E8F8",
                    icon: "/images/bb-Logo.png",
                },
            ],
        },
    },
    {
        id: 3,
        name: "Sarah John",
        role: "Public Speaker",
        image: "/images/avatar2.jpg",
        rating: 5,
        text: "Manifesti has helped my friends and customers on our future aspirations. It promotes a sense of confidence and accountability among us, helping us stay aligned with their goals.",
        manifestations: {
            title: "Manifestations",
            tags: [
                {
                    label: "Health",
                    color: "#06BF37",
                    bg: "#E6F8EA",
                    icon: "/images/gb-logo.png",
                },
                {
                    label: "Career",
                    color: "#3C6BF6",
                    bg: "#EEF1FF",
                    icon: "/images/bb-Logo.png",
                },
                {
                    label: "Physique",
                    color: "#800080",
                    bg: "#F3E8F8",
                    icon: "/images/bb-Logo.png",
                },
            ],
        },
    },
    {
        id: 4,
        name: "Martins Kelechi",
        role: "Business Woman",
        image: "/images/avatar2.jpg",
        rating: 5,
        text: "Now my visions are not only in my dreams, I can literally see them on my device. I can see my future self, who I want to be, and that keeps me motivated.",
        manifestations: {
            title: "Manifestations",
            tags: [
                {
                    label: "Health",
                    color: "#06BF37",
                    bg: "#E6F8EA",
                    icon: "/images/gb-logo.png",
                },
                {
                    label: "Career",
                    color: "#3C6BF6",
                    bg: "#EEF1FF",
                    icon: "/images/bb-Logo.png",
                },
            ],
        },
    },
    {
        id: 5,
        name: "Alex Morgan",
        role: "Fitness Coach",
        image: "/images/avatar2.jpg",
        rating: 5,
        text: "This app transformed how I visualize my fitness goals. Seeing my future self keeps me motivated every single day.",
        manifestations: {
            title: "Manifestations",
            tags: [
                {
                    label: "Health",
                    color: "#06BF37",
                    bg: "#E6F8EA",
                    icon: "/images/gb-logo.png",
                },
                {
                    label: "Physique",
                    color: "#800080",
                    bg: "#F3E8F8",
                    icon: "/images/bb-Logo.png",
                },
            ],
        },
    },
    {
        id: 6,
        name: "Taylor Swift",
        role: "Music Artist",
        image: "/images/avatar2.jpg",
        rating: 5,
        text: "As an artist, visualization is key. This app helps me see my future performances and career milestones clearly.",
        manifestations: {
            title: "Manifestations",
            tags: [
                {
                    label: "Career",
                    color: "#3C6BF6",
                    bg: "#EEF1FF",
                    icon: "/images/bb-Logo.png",
                },
                {
                    label: "Travel",
                    color: "#06BF37",
                    bg: "#E6F8EA",
                    icon: "/images/gb-logo.png",
                },
            ],
        },
    },
    {
        id: 7,
        name: "Chris Evans",
        role: "Actor",
        image: "/images/avatar2.jpg",
        rating: 5,
        text: "Manifestation has never been easier. The visual aspect of this app makes my goals feel tangible and achievable.",
        manifestations: {
            title: "Manifestations",
            tags: [
                {
                    label: "Career",
                    color: "#3C6BF6",
                    bg: "#EEF1FF",
                    icon: "/images/bb-Logo.png",
                },
                {
                    label: "Health",
                    color: "#06BF37",
                    bg: "#E6F8EA",
                    icon: "/images/gb-logo.png",
                },
            ],
        },
    },
];
