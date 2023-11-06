import { usestore } from './usestore'
import { Cube } from './cube'

export const Cubes = () => {
	const [cubes] = usestore((state) => [
		state.cubes
	])
	return cubes.map(({ key, position, texture }) => {
		return (
			<Cube key={key} position={position} texture={texture} />
		)
	})
}