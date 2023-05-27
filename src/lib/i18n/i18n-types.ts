// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'fr'

export type Locales =
	| 'ar'
	| 'en'
	| 'fr'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * b​o​n​j​o​u​r​ ​{​n​a​m​e​}​!​ ​V​e​u​i​l​l​e​z​ ​l​a​i​s​s​e​r​ ​u​n​e​ ​é​t​o​i​l​e​ ​s​i​ ​v​o​u​s​ ​a​i​m​e​z​ ​c​e​ ​p​r​o​j​e​t​:
	 * @param {string} name
	 */
	HI: RequiredParams<'name'>
	/**
	 * c​o​u​r​s
	 */
	cours: string
	/**
	 * p​a​r​c​o​u​r​s
	 */
	parcours: string
	/**
	 * c​o​n​n​e​x​t​i​o​n
	 */
	connextion: string
	/**
	 * r​e​j​o​i​n​d​r​e
	 */
	rejoindre: string
}

export type TranslationFunctions = {
	/**
	 * bonjour {name}! Veuillez laisser une étoile si vous aimez ce projet:
	 */
	HI: (arg: { name: string }) => LocalizedString
	/**
	 * cours
	 */
	cours: () => LocalizedString
	/**
	 * parcours
	 */
	parcours: () => LocalizedString
	/**
	 * connextion
	 */
	connextion: () => LocalizedString
	/**
	 * rejoindre
	 */
	rejoindre: () => LocalizedString
}

export type Formatters = {}
