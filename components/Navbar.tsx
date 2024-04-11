import {
  Box,
  Button,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import axios from "axios";

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const appURL: string = process.env.APP_URL || "";
  const [sessionNav, setSessionNav] = useState(null);

  const getSession = async () => {
    const session = localStorage.getItem("easywrite.dev-login-data");
    console.log("session", session);
  };

  useEffect(() => {
    getSession();
  }, []);

  return (
    <Box className="mainContainer" pt={4} pb={4}>
      <Flex>
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <GrClose /> : <GiHamburgerMenu />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Heading>EasyWrite.Dev</Heading>
        <Spacer />
        <Flex display={{ base: "none", md: "flex" }} ml={10}>
          <DesktopNav />
        </Flex>

        <Spacer />
        {sessionNav == null && (
          <Flex gap={5} alignItems="center">
            <Link
              href={`${appURL}/login`}
              //  _hover={{ border: "none" }}
            >
              <Text color="#A6A6A6" variant="secondary-text">
                Sign in
              </Text>
            </Link>
            <Link href={`${appURL}/register`}>
              <Button variant="primary-button">Sign Up</Button>
            </Link>
          </Flex>
        )}
        {sessionNav !== null && (
          <Link href={`${appURL}/dashboard`}>
            <Button variant="primary-button">Dashboard</Button>
          </Link>
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={7} alignItems="center">
      {NAV_ITEMS.map((navItem, index) => (
        <Box key={index}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link href={navItem.href} scroll={true}>
                <Text variant="primary-text" _hover={{ color: "#8B54BD" }}>
                  {navItem.label}
                </Text>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child, index) => (
                    <DesktopSubNav key={index} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link href={href}>
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={BsChevronRight} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
      mt={2}
    >
      {NAV_ITEMS.map((navItem, index) => (
        <MobileNavItem key={index} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={BsChevronDown}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child, index) => (
              <Link key={index} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: any;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
    // children: [
    //   {
    //     label: "Explore Design Work",
    //     subLabel: "Trending Design to inspire you",
    //     href: "#",
    //   },
    //   {
    //     label: "New & Noteworthy",
    //     subLabel: "Up-and-coming Designers",
    //     href: "#",
    //   },
    // ],
  },
  // {
  //   label: "Features",
  //   href: "#features",
  // children: [
  //   {
  //     label: "Job Board",
  //     subLabel: "Find your dream design job",
  //     href: "#",
  //   },
  //   {
  //     label: "Freelance Projects",
  //     subLabel: "An exclusive list for contract work",
  //     href: "#",
  //   },
  // ],
  // },
  // {
  //   label: "Benefits",
  //   href: "#benefits",
  // },
  {
    label: "Blog",
    href: "/blog",
  },
];

export default Navbar;
