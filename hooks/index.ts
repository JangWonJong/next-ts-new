import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector,
    Provider
} from 'react-redux'

import type {RootState, AppDispatch } from '@/modules/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector