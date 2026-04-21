import React, { useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'

function Model(props) {
  const { nodes, materials } = useGLTF('/models/scene1.glb')

  // ✅ 自然变色的核心逻辑
  useLayoutEffect(() => {
    const targetColor = new THREE.Color(props.item.color[0]);

    // 定义需要变色的材质列表
    const materialsToAnimate = [
      materials['default'],
      materials.BodyLine,
      materials.steel,
      materials.backSheild // 有些模型背板叫这个
    ];

    materialsToAnimate.forEach((mat) => {
      if (mat) {

        if(mat.name === 'backSheild'){
          mat.map = null;
        }

        //mat.color.management = false;//

        gsap.to(mat.color, {
          r: targetColor.r,
          g: targetColor.g,
          b: targetColor.b,
          duration: 1, // 动画持续时间（秒）
          ease: 'power2.out' ,// 缓动函数，让变色更柔和
          onUpdate: () => {
            mat.needsUpdate = true;
          }
        });
      }
    });
  }, [props.item.color, materials]); // 监听传入颜色的变化

  return (
    <group {...props} dispose={null}>
      <group position={[-0.004, 2.83, 0.004]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.BodyLine}
        />
        <group position={[-0.001, -0.541, -0.154]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15.geometry}
            material={materials['default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials.Black}
          />
        </group>
        <group position={[0.004, -2.755, -0.054]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_26.geometry}
            material={materials.steel}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_27.geometry}
            material={materials.charge_chip}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials['default']}
          position={[-1.038, -1.388, -0.049]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials['default']}
          position={[0.012, 1.077, 0.068]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials['default']}
          position={[-0.691, 0.81, -0.085]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.lens}
          position={[-0.691, 1.348, 0.185]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials['default']}
          position={[-1.06, 0.195, -0.046]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.steel}
          position={[-0.217, -2.794, -0.054]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.sensor_flash}
          position={[0.012, 1.077, 0.068]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.sound_filter}
          position={[2.271, -2.772, -0.054]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={materials['default']}
          position={[1.067, 0.328, -0.046]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_31.geometry}
          material={materials.backSheild}
          position={[0.004, -1.169, 0.057]}
        />
      </group>
    </group>
  )
}

export default Model;

//useGLTF.preload('/models/scene1.glb')//