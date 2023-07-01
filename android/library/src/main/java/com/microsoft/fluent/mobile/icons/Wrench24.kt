package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Wrench24: ImageVector
  get() {
    if (_wrench24 != null) {
      return _wrench24!!
    }
    _wrench24 = fluentIcon(name = "Filled.Wrench24", 24f) {
      materialPath {
          moveTo(16.75F, 2.001F)
          curveToRelative(-2.9F, 0.0F, -5.25F, 2.35F, -5.25F, 5.25F)
          curveToRelative(0.0F, 0.553F, 0.085F, 1.087F, 0.245F, 1.589F)
          lineToRelative(-9.068F, 9.38F)
          curveToRelative(-0.96F, 0.993F, -0.857F, 2.596F, 0.221F, 3.459F)
          curveToRelative(0.945F, 0.755F, 2.309F, 0.668F, 3.15F, -0.201F)
          lineToRelative(8.962F, -9.272F)
          curveToRelative(0.545F, 0.191F, 1.131F, 0.295F, 1.74F, 0.295F)
          curveToRelative(2.9F, 0.0F, 5.25F, -2.35F, 5.25F, -5.25F)
          curveToRelative(0.0F, -0.503F, -0.071F, -0.99F, -0.204F, -1.452F)
          curveToRelative(-0.073F, -0.255F, -0.276F, -0.453F, -0.533F, -0.52F)
          curveToRelative(-0.257F, -0.066F, -0.53F, 0.009F, -0.718F, 0.197F)
          lineTo(17.361F, 8.66F)
          lineToRelative(-2.06F, -2.06F)
          lineToRelative(3.16F, -3.162F)
          curveToRelative(0.19F, -0.19F, 0.264F, -0.465F, 0.195F, -0.723F)
          curveToRelative(-0.069F, -0.259F, -0.27F, -0.461F, -0.528F, -0.531F)
          curveTo(17.688F, 2.064F, 17.226F, 2.0F, 16.75F, 2.0F)
          close()        
      }
    }
    return _wrench24!!
  }

private var _wrench24: ImageVector? = null
