import { NavLink } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";

export default function Navbar() {
    return (
        <>
            <Flex
                justifyContent={{ base: "center", sm: "space-between" }}
                gap={{ base: "1em", sm: "unset" }}
                direction={{ base: "column", sm: "row" }}
                alignItems={{ base: "center", sm: "unset" }}
                margin={"2rem 0 8rem"}
            >
                <NavLink id="logoname" to="/">
                    <Text textStyle="a" as="span" fontWeight={"600"}>
                        Lucrecia Garino
                    </Text>
                </NavLink>
                <Flex gap={"1.5em"}>
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
    );
}
