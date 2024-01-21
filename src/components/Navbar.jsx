import { NavLink } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";

export default function Navbar() {
    return (
        <>
            <Flex
                justifyContent="space-between"
                h={"8rem"}
                direction={{ base: "column", sm: "row" }}
                alignItems={{ base: "center", sm: "unset" }}
                margin={"2rem 0"}
            >
                <NavLink to="/" className="logoimg">
                    <Text textStyle="a" as="span">
                        Lucrecia Garino
                    </Text>
                </NavLink>
                <div>
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
                </div>
            </Flex>
        </>
    );
}
