const mainGallery = [
    "./gallery/4b421_md.png",
    "./gallery/005-DriverlessCar_md.png",
    "./gallery/abundance_md.png",
    "./gallery/ALLIN_fondosmall_md.png",
    "./gallery/AWTY_Dribbble_md.png",
    "./gallery/billboard_md.png",
    "./gallery/brand_grill_md.png",
    "./gallery/chinatown_md.png",
    "./gallery/Circusbear_md.png",
    "./gallery/cny_edit_md.png",
    "./gallery/collage_toast_md.png",
    "./gallery/cuyes_nuevo_amanecerB_md.png",
    "./gallery/Egypt_palette_md.png",
    "./gallery/fondo_md.png",
    "./gallery/green_md.png",
    "./gallery/H_Dribbble_md.png",
    "./gallery/Havi_new_md.png",
    "./gallery/insurance_md.png",
    "./gallery/Invisible_md.png",
    "./gallery/kat_md.png",
    "./gallery/Logo-Measures-Final_md.gif",
    "./gallery/Logos_simple_md.png",
    "./gallery/MA_I436653full_md.png",
    "./gallery/madefordigital2_md.png",
    "./gallery/mixed_001_md.gif",
    "./gallery/mixed_002_md.gif",
    "./gallery/mixed_003_md.png",
    "./gallery/mixed_005_md.png",
    "./gallery/mixed_006_md.png",
    "./gallery/mixed_008_md.png",
    "./gallery/mixed_009_md.png",
    "./gallery/Moow_md.png",
    "./gallery/orange_md.png",
    "./gallery/Round_md.gif",
    "./gallery/PearGrain_md.png",
    "./gallery/Ski_mountain_md.png",
    "./gallery/Social_keyvisual_md.png",
    "./gallery/UI_countdown_md.png",
];

const IMAGES = {
    gallery: mainGallery.map(
        (filepath) => new URL(`${filepath}`, import.meta.url).href
    ),
    other: {
        footergallerybg730: new URL(
            "./other/footer-gallerybg-730.png",
            import.meta.url
        ).href,
        branding1: new URL("./other/branding_1.png", import.meta.url).href,
        branding2: new URL("./other/branding_2.png", import.meta.url).href,
        branding3: new URL("./other/branding_3.png", import.meta.url).href,
        branding4: new URL("./other/branding_4.png", import.meta.url).href,
        project1: new URL("./other/project1.png", import.meta.url).href,
    },
    socials: {
        email: new URL("./socials/email.svg", import.meta.url).href,
        behance: new URL("./socials/behance.svg", import.meta.url).href,
        github: new URL("./socials/github.svg", import.meta.url).href,
        instagram: new URL("./socials/instagram.svg", import.meta.url).href,
        dribbble: new URL("./socials/dribbble.svg", import.meta.url).href,
        linkedin: new URL("./socials/linkedin.svg", import.meta.url).href,
    },
};

export default IMAGES;
