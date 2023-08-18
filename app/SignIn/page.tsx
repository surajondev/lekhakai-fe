"use client";
import React from 'react'
import { Box } from "@chakra-ui/react";
import { Footer } from '@/components/Footer';
import { SignIn } from '@/components/SignIn';

export default function login (){
    return (
        <Box>
       <Box position="relative">
        <Box
          width={634}
          height={634}
          flexShrink={0}
          borderRadius={634}
          backgroundColor="#FFD6D6"
          position="absolute"
          filter={"blur(250px)"}
          top="20%"
          left="-20%"
          zIndex={-1}
        />
       <SignIn />
        <Box
          width={634}
          height={634}
          flexShrink={0}
          borderRadius={634}
          backgroundColor="#8B54BE"
          position="absolute"
          filter={"blur(400px)"}
          top="50%"
          left="70%"
          zIndex={-1}
        />
      </Box>
      <Box backgroundColor="#161C28">
        <Footer />
      </Box>
    </Box>
    );
}
