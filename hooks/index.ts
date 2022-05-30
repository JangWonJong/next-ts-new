import {  TypedUseSelectorHook,  useDispatch,  useSelector } from 'react-redux'

import type {AppState, AppDispatch } from '@/modules/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector