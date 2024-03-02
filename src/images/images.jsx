const IMAGES = {
    gallery: [
        // collage
        new URL("./gallery/collage/collage1.png", import.meta.url).href,
        new URL("./gallery/collage/collage2.png", import.meta.url).href,
        new URL("./gallery/collage/collage3.png", import.meta.url).href,
        new URL("./gallery/collage/collage4.png", import.meta.url).href,
        new URL("./gallery/collage/collage5.png", import.meta.url).href,
        new URL("./gallery/collage/collage6.png", import.meta.url).href,
        new URL("./gallery/collage/collage7.png", import.meta.url).href,
        new URL("./gallery/collage/collage8.png", import.meta.url).href,
        new URL("./gallery/collage/collage9.png", import.meta.url).href,
        new URL("./gallery/collage/collage10.png", import.meta.url).href,

        // illustration
        new URL("./gallery/illustration/illustration2.png", import.meta.url)
            .href,
        new URL("./gallery/illustration/illustration1.gif", import.meta.url)
            .href,
        new URL("./gallery/illustration/illustration5.gif", import.meta.url)
            .href,
        new URL("./gallery/illustration/illustration4.png", import.meta.url)
            .href,
        new URL("./gallery/illustration/illustration3.png", import.meta.url)
            .href,

        // keyvisual
        new URL("./gallery/keyvisual/keyvisual1.gif", import.meta.url).href,
        new URL("./gallery/keyvisual/keyvisual2.png", import.meta.url).href,
        new URL("./gallery/keyvisual/keyvisual3.png", import.meta.url).href,
        new URL("./gallery/keyvisual/keyvisual4.png", import.meta.url).href,
        new URL("./gallery/keyvisual/keyvisual5.png", import.meta.url).href,
        new URL("./gallery/keyvisual/keyvisual6.png", import.meta.url).href,
        new URL("./gallery/keyvisual/keyvisual7.png", import.meta.url).href,
        new URL("./gallery/keyvisual/keyvisual8.gif", import.meta.url).href,
        new URL("./gallery/keyvisual/keyvisual9.png", import.meta.url).href,
        new URL("./gallery/keyvisual/keyvisual10.png", import.meta.url).href,
        new URL("./gallery/keyvisual/keyvisual11.png", import.meta.url).href,
        new URL("./gallery/keyvisual/keyvisual12.png", import.meta.url).href,

        // logo
        new URL("./gallery/logo/logo1.png", import.meta.url).href,
        new URL("./gallery/logo/logo2.png", import.meta.url).href,
        new URL("./gallery/logo/logo3.png", import.meta.url).href,
        new URL("./gallery/logo/logo4.png", import.meta.url).href,
        new URL("./gallery/logo/logo5.png", import.meta.url).href,
        new URL("./gallery/logo/logo6.png", import.meta.url).href,
        new URL("./gallery/logo/logo7.png", import.meta.url).href,
        new URL("./gallery/logo/logo8.png", import.meta.url).href,
        new URL("./gallery/logo/logo9.png", import.meta.url).href,
    ],
    other: {
        footergallerybg730: new URL(
            "./other/footer-gallerybg-730.png",
            import.meta.url
        ).href,
        katerina: new URL("./other/katerina.png", import.meta.url).href,
        misobservatorio: new URL("./other/misobservatorio.png", import.meta.url)
            .href,
        allin: new URL("./other/allin.png", import.meta.url).href,
        tierracristal: new URL("./other/tierracristal.png", import.meta.url)
            .href,
        ngonh: new URL("./other/ngonh.png", import.meta.url).href,
        awty: new URL("./other/awty.png", import.meta.url).href,
        project1: new URL("./other/project1.png", import.meta.url).href,
        project2: new URL("./other/project2.png", import.meta.url).href,
    },
    socials: {
        email: new URL("./socials/email.svg", import.meta.url).href,
        behance: new URL("./socials/behance.svg", import.meta.url).href,
        github: new URL("./socials/github.svg", import.meta.url).href,
        instagram: new URL("./socials/instagram.svg", import.meta.url).href,
        dribbble: new URL("./socials/dribbble.svg", import.meta.url).href,
        linkedin: new URL("./socials/linkedin.svg", import.meta.url).href,
    },
    projectGalleries: {
        katerina: [
            new URL("./other/katerina/card.png", import.meta.url).href,
            new URL("./other/katerina/ad.png", import.meta.url).href,
            new URL("./other/katerina/cards.png", import.meta.url).href,
            new URL("./other/katerina/totebag.png", import.meta.url).href,
        ],
        misobservatorio: [
            new URL("./other/misobservatorio/folleto.png", import.meta.url)
                .href,
            new URL("./other/misobservatorio/totebag.png", import.meta.url)
                .href,
            new URL("./other/misobservatorio/instagram.png", import.meta.url)
                .href,
            new URL("./other/misobservatorio/posters.png", import.meta.url)
                .href,
        ],
        allin: [
            new URL("./other/allin/instagram.png", import.meta.url).href,
            // new URL("./other/allin/notebook.png", import.meta.url).href,
            new URL("./other/allin/tearoff.png", import.meta.url).href,
            new URL("./other/allin/mobile.png", import.meta.url).href,
            new URL("./other/allin/animation.gif", import.meta.url).href,
        ],
        tierracristal: [
            new URL("./other/tierracristal/membership.png", import.meta.url)
                .href,
            new URL("./other/tierracristal/letterpress.png", import.meta.url)
                .href,
            new URL("./other/tierracristal/stickers.png", import.meta.url).href,
            new URL("./other/tierracristal/brochure.png", import.meta.url).href,
        ],
        ngonh: [
            new URL("./other/ngonh/tote.png", import.meta.url).href,
            new URL("./other/ngonh/poster.png", import.meta.url).href,
            new URL("./other/ngonh/mailer.png", import.meta.url).href,
            new URL("./other/ngonh/animation.gif", import.meta.url).href,
        ],
        awty: [
            new URL("./other/awty/insta.png", import.meta.url).href,
            new URL("./other/awty/brand.png", import.meta.url).href,
            // new URL("./other/awty/poster.png", import.meta.url).href,
            new URL("./other/awty/speakers.png", import.meta.url).href,
            new URL("./other/awty/postsgif.gif", import.meta.url).href,
        ],
    },
};

export default IMAGES;
