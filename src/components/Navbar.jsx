import { NavLink } from "react-router-dom";
import {
    Flex,
    Text,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import React from "react";

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const breakpoint = useBreakpointValue({ base: "base", sm: "sm" });

    return (
        <>
            {breakpoint === "base" ? (
                <>
                    <Flex
                        justifyContent={"space-between"}
                        gap={"1em"}
                        direction={"row"}
                        alignItems={"center"}
                        margin={"2rem 0"}
                    >
                        <NavLink id="logoname" to="/">
                            <Text textStyle="a" as="span" fontWeight={"600"}>
                                Lucrecia Garino
                            </Text>
                        </NavLink>

                        <IconButton
                            variant="ghost"
                            ref={btnRef}
                            aria-label="Toggle Menu"
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            onClick={isOpen ? onClose : onOpen}
                        />

                        <Drawer
                            id="drawer"
                            placement="top"
                            onClose={onClose}
                            isOpen={isOpen}
                            finalFocusRef={btnRef}
                        >
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerHeader></DrawerHeader>
                                <DrawerCloseButton p="4em 2em" />
                                <DrawerBody>
                                    <Flex
                                        h="100%"
                                        direction={"column"}
                                        alignItems={"center"}
                                        justifyContent={"space-evenly"}
                                    >
                                        <NavLink
                                            className="link"
                                            to="/"
                                            onClick={onClose}
                                        >
                                            <Text textStyle="h1" as="span">
                                                Projects
                                            </Text>
                                        </NavLink>
                                        <NavLink
                                            className="link"
                                            to="/gallery"
                                            onClick={onClose}
                                        >
                                            <Text textStyle="h1" as="span">
                                                Gallery
                                            </Text>
                                        </NavLink>
                                        <NavLink
                                            className="link"
                                            to="/about"
                                            onClick={onClose}
                                        >
                                            <Text textStyle="h1" as="span">
                                                About
                                            </Text>
                                        </NavLink>
                                    </Flex>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </Flex>
                </>
            ) : (
                <>
                    <Flex
                        justifyContent={"space-between"}
                        gap={"unset"}
                        direction={"row"}
                        alignItems={"unset"}
                        margin={"2rem 0 4rem"}
                    >
                        <NavLink id="logoname" to="/">
                            <Text textStyle="a" as="span" fontWeight={"600"}>
                                Lucrecia Garino
                            </Text>
                        </NavLink>
                        <Flex
                            gap={"1.5em"}
                            direction={"row"}
                            alignItems={"unset"}
                        >
                            <NavLink className="link" to="/">
                                <Text textStyle="a" as="span">
                                    Projects
                                </Text>
                            </NavLink>
                            <NavLink className="link" to="/gallery">
                                <Text textStyle="a" as="span">
                                    Gallery
                                </Text>
                            </NavLink>
                            <NavLink className="link" to="/about">
                                <Text textStyle="a" as="span">
                                    About
                                </Text>
                            </NavLink>
                        </Flex>
                    </Flex>
                </>
            )}
        </>
    );
}
