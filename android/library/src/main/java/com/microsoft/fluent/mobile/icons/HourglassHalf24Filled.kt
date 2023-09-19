package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.HourglassHalf24: ImageVector
  get() {
    if (_hourglassHalf24 != null) {
      return _hourglassHalf24!!
    }
    _hourglassHalf24 = fluentIcon(name = "Filled.HourglassHalf24", 24f) {
      materialPath {
          moveTo(6.75F, 19.5F)
          horizontalLineToRelative(10.5F)
          curveToRelative(0.066F, 0.0F, 0.13F, -0.026F, 0.177F, -0.073F)
          curveToRelative(0.047F, -0.047F, 0.073F, -0.11F, 0.073F, -0.177F)
          verticalLineToRelative(-0.6F)
          curveToRelative(-0.005F, -0.524F, -0.137F, -1.038F, -0.384F, -1.5F)
          curveToRelative(-0.247F, -0.461F, -0.603F, -0.856F, -1.036F, -1.15F)
          lineTo(14.0F, 14.52F)
          curveToRelative(-0.42F, -0.278F, -0.77F, -0.65F, -1.02F, -1.089F)
          curveToRelative(-0.25F, -0.437F, -0.394F, -0.928F, -0.42F, -1.431F)
          horizontalLineToRelative(-1.12F)
          curveToRelative(-0.026F, 0.503F, -0.17F, 0.994F, -0.42F, 1.431F)
          curveToRelative(-0.25F, 0.438F, -0.6F, 0.811F, -1.02F, 1.089F)
          lineTo(7.92F, 16.0F)
          curveToRelative(-0.433F, 0.294F, -0.789F, 0.689F, -1.036F, 1.15F)
          curveToRelative(-0.247F, 0.462F, -0.379F, 0.976F, -0.384F, 1.5F)
          verticalLineToRelative(0.6F)
          curveToRelative(0.0F, 0.066F, 0.026F, 0.13F, 0.073F, 0.177F)
          curveTo(6.62F, 19.474F, 6.683F, 19.5F, 6.75F, 19.5F)
          close()        
      }
    }
    return _hourglassHalf24!!
  }

private var _hourglassHalf24: ImageVector? = null
