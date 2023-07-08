import lucreLogo from "/logoLucre.svg";
import { Link, NavLink } from "react-router-dom";
import { Flex, Image, Text } from "@chakra-ui/react";

export default function Navbar() {
    return (
        <>
            <Flex
                justifyContent="space-between"
                h={"8rem"}
                direction={{ base: "column", sm: "row" }}
                alignItems={{ base: "center", sm: "unset" }}
                margin={"2rem"}
            >
                <Link to="/">
                    <Image
                        src={lucreLogo}
                        className="logoimg"
                        alt="Lucre logo"
                    />
                </Link>
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
