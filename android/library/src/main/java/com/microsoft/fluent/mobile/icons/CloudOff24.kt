package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CloudOff24: ImageVector
  get() {
    if (_cloudOff24 != null) {
      return _cloudOff24!!
    }
    _cloudOff24 = fluentIcon(name = "Filled.CloudOff24", 24f) {
      materialPath {
          moveTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(4.633F, 4.634F)
          curveTo(6.472F, 8.55F, 6.205F, 9.26F, 6.08F, 10.02F)
          curveTo(3.792F, 10.231F, 2.0F, 12.156F, 2.0F, 14.5F)
          curveTo(2.0F, 16.985F, 4.015F, 19.0F, 6.5F, 19.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.142F, 0.0F, 0.282F, -0.006F, 0.42F, -0.02F)
          lineToRelative(2.8F, 2.8F)
          curveToRelative(0.292F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.292F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(3.28F, 2.22F)
          close()
          moveTo(22.0F, 14.5F)
          curveToRelative(0.0F, 1.196F, -0.467F, 2.284F, -1.228F, 3.09F)
          lineTo(8.99F, 5.808F)
          curveTo(9.875F, 5.294F, 10.903F, 5.0F, 12.0F, 5.0F)
          curveToRelative(2.98F, 0.0F, 5.452F, 2.172F, 5.92F, 5.02F)
          curveTo(20.208F, 10.23F, 22.0F, 12.155F, 22.0F, 14.5F)
          close()        
      }
    }
    return _cloudOff24!!
  }

private var _cloudOff24: ImageVector? = null
