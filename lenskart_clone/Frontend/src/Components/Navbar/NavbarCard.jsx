import React from "react";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import NavbarCard5 from "./NavbarCard5";
import { NavbarDetail1 } from "./NavbarDetail";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../ContextApi/AuthContext";
import { useNavigate } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { BsHandbag } from "react-icons/bs";
import {
  Box,
  Text,
  Flex,
  Spacer,
  Image,
  Input,
  Button,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody
} from "@chakra-ui/react";
import TrackOrder from "../../Pages/Track Order/TrackOrder";

export const NavbarCard1 = () => {
  return (
    <Box cursor="pointer">
      <Flex gap={2} pl={5} pt={2}>
        {NavbarDetail1.map((i, index) => (
          <Box key={index}>
            <Text fontSize="12px" _hover={{ textDecoration: "underline" }}>
              {i.labels}
            </Text>
            <Spacer />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export const NavbarCard2 = () => {
  const { isAuth, setisAuth, Authdata } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Box cursor="pointer">
      <HStack m="auto">
        <Box w="20%"ml="5%">
          <Link to="/">
            <Image src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" alt="logo" w="75%" />
          </Link>
        </Box>
        <HStack w="85%" m="auto">
          <Box w="15%">
            <HStack fontSize="18px" fontWeight="bold">
            <img  style={{ width: "100%" , height:"50%", marginTop:"3%", marginRight:"-55%"}} 
            src="https://static1.lenskart.com/media/desktop/img/republic/eye/new-toll-number.png" alt="" />
            </HStack>
          </Box>
          <Box w="55%">
            <Input
              placeholder="What are you looking for"
              border="1px solid black"
              w="95%"
              fontSize="17px"
              h="45px"
            />
          </Box>
          <HStack w="35%">
            <Button
              size="lg"
              bg="whiteAlpha.900"
              fontSize="14px"
              fontWeight="400"
              onClick={() => navigate("/orderhistory")}
            >
              Track Order
            </Button>
            {isAuth === true ? (
              
                <TrackOrder/>
                  
              
            
            ) : (
              <Box display={"flex"}>
                <Login />
              
              </Box>
            )}
            <Button
              leftIcon={<CiHeart />}
              size="lg"
              bg="whiteAlpha.900"
              fontSize="14px"
              fontWeight="400"
              onClick={() => navigate("/wishlist")}
            >
              Wishlist
            </Button>
            <Link to="/cart">
              <Button
                leftIcon={<BsHandbag />}
                size="lg"
                bg="whiteAlpha.900"
                fontSize="14px"
                fontWeight="400"
              >
                Cart
              </Button>
            </Link>
          </HStack>
        </HStack>
      </HStack>
    </Box>
  );
};

export const NavbarCard4 = () => {
  return (
    <Box cursor="pointer" bg="#fbf9f7" p={2.5}>
      <Flex gap={4} pl={5} pt={2} justifyContent="space-between">
        <NavbarCard5 />
        <HStack w="20%" ml="5%" justifyContent="right">
          <Image
            src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png"
            alt="img1"
            w="70px"
            borderRadius="base"
          />
          <Image
            src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png"
            alt="img1"
            w="70px"
            borderRadius="base"
          />
          <Image
            src="https://static.lenskart.com/media/desktop/img/Feb22/18-Feb/goldlogo.jpg"
            alt="img1"
            w="70px"
            borderRadius="base"
          />
        </HStack>
      </Flex>
    </Box>
  );
};
