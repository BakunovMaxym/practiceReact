import { motion } from "framer-motion";
import './App.css'; 

const transition = (OgComponent) => {
    return (props) => {
        return(
        <div>
            
            <motion.div
                initial={{ scaleY: 0 }} 
                animate={{ scaleY: 1 }} 
                exit={{ scaleY: 0 }}    
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} 
                style={{ originY: 0 }}
            >
                <OgComponent {...props} />
            </motion.div>
        </div>

        )
    }
}

export default transition;