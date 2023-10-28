import Particles from 'react-tsparticles'
import {loadSlim} from 'tsparticles-slim'
// import { loadFull } from 'tsparticles'
import { useCallback, useMemo } from 'react'
const particle=()=>{

    const options = useMemo[()=>{
        return{};
    },[]];
    const particlesInit =useCallback[(engine)=>{
        loadSlim(engine)
        // loadFull(engine)
    },[]]

    return(
        <Particles id="tsparticles"/>
        
    )
}
export default particle;