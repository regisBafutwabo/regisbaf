'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  IconButton,
  Link,
  List,
  ListItem,
  OrderedList,
  Text,
} from '@chakra-ui/react';

export const MotionBox = motion(Box);

export const MotionList = motion(List);

export const MotionOrderedList = motion(OrderedList);

export const MotionListItem = motion(ListItem);

export const MotionButton = motion(Button);

export const MotionLink = motion(Link);

export const MotionText = motion(Text);

export const MotionImage = motion(Image);

export const MotionIconButton = motion(IconButton);

export const MotionMoonIcon = motion(MoonIcon);

export const MotionSunIcon = motion(SunIcon);

export const MotionCloseIcon = motion(CloseIcon);
