import React from 'react'
import context from '../context'
import languange from '../resource/languange'

const useLanguange = () => {
	const ctx = React.useContext(context)
	return React.useCallback((text) => {
		return languange(ctx.languange, text)
	}, [ctx.languange])
}

export default useLanguange