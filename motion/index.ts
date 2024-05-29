export const navVariants = {
    hidden: { y: "-100%" },
    vissible: { y: 0, transition: { ease: [0.76, 0, 0.24, 1], duration: 0.7 }, }
};

export const footerVarient = {
    hidden: { y: 150, opacity: 0 },
    vissible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }, },
};

export const wrapperVariants = {
    open: {
        scaleY: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    closed: {
        scaleY: 0,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.1,
        },
    },
};