import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity style={{
      width: 40,
      height: 40,
      backgroundColor: COLORS.white,
      position: 'absolute',
      borderRadius: SIZES.extraLarge,
      alignItems: 'center',
      justifyContent: 'center',
      ...SHADOWS.light,
      ...props
    }} 
    onPress={handlePress}>
      <Image source={imgUrl}
        resizeMode='contain'
        style={{ width: 24, height:24 }} />
    </TouchableOpacity>
  )
}
export const RectButton = ({ minWidht, fontSize, handlePress, paddingHoriz, ...props }) => {
  return (
    <TouchableOpacity style={{
      backgroundColor: COLORS.primary,
      borderRadius: SIZES.extraLarge,
      minWidth: minWidht,
      padding: SIZES.small,
      paddingHorizontal: paddingHoriz,
      ...props
    }} 
    onPress={handlePress}>
      <Text style={{
        fontFamily: FONTS.semiBold,
        color: COLORS.white,
        fontSize: fontSize,
        textAlign: 'center',
      }}>
        Place a bid
      </Text>
    </TouchableOpacity>
  )
}

