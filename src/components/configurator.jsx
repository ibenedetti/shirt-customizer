import React, { useCallback } from 'react'
import { useCustomization } from '../Context/Customization'
import {useDropzone} from 'react-dropzone'

const Configurator = () => {
    const { color, setColor } = useCustomization();
    const { side, setSide } = useCustomization();
    const { decal, setDecal } = useCustomization();

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];

        if (!file || !file.type.includes('png')) {
            alert('Please upload only .png files.')
            return;
        }

        const imageUrl = URL.createObjectURL(file);
        setDecal(imageUrl);
  }, [setDecal])


  const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: {
            'image/png': ['.png']
        },
        multiple: false,
    })

    const removeDecal = () => {
        if(decal) {
            URL.revokeObjectURL(decal);
            setDecal(null);
        }
    }


    function handlecolorChange(event) {
        setColor(event.target.value);
      }
  return (
    <div className="configurator">
        <div className="configurator_section">
            <div className="configurator_section_title">
                <div className="color-display" style={{background: color, color: color === '#ffffff' ? 'black' : 'white'}}>
                    <p>Shirt Color: {color}</p>
                </div>
            </div>
            <div className="configurator_section_values">
                
                <label>select a Color</label>
                <input type="color" value={color} onChange={handlecolorChange} />
            </div>
        </div>
        <div className="configurator_section">
             <div className="configurator_section_title">                
                    <p>View</p>
            </div>
            <div className={side === 'front' ? 'item item--active' : 'item'}onClick={() => setSide("front")}>
                    <div className="item_label">
                        Front
                    </div>
            </div>
            <div className={side === 'right' ? 'item item--active' : 'item'} onClick={() => setSide("right")}>
                <div className="item_label">
                    Right Side
                </div>
            </div> 
            <div className={side === 'left' ? 'item item--active' : 'item'}onClick={() => setSide("left")}>
                    <div className="item_label">
                        Left-Side
                    </div>
            </div>
            <div className={side === 'back' ? 'item item--active' : 'item'} onClick={() => setSide("back")}>
                <div className="item_label">
                    Back
                </div>
            </div> 
        </div>

        <div className="configurator_section">
             <div className="configurator_section_title">                
                    <p>Decal</p>
            </div>
             {decal && (
                    <div style={{ marginBottom: '10px' }}>
                        <img src={decal} alt="Decal preview" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                        <button onClick={removeDecal} style={{ marginLeft: '10px' }}>Remove</button>
                    </div>
                )}
                
                <div {...getRootProps()} style={{
                    border: '2px dashed #ccc',
                    padding: '20px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    backgroundColor: isDragActive ? '#f0f0f0' : 'transparent'
                }}></div>
            <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
        </div>
    </div>
  )
};

export default Configurator