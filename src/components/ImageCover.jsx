import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

function ImageCover({ src, alt }) {
    return (
        <Box overflow={"hidden"}>
            <motion.img
                src={src}
                alt={alt}
                className="projectImgSm"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
            />
        </Box>
    );
}

export default ImageCover;
