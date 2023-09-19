package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CloudOff20: ImageVector
  get() {
    if (_cloudOff20 != null) {
      return _cloudOff20!!
    }
    _cloudOff20 = fluentIcon(name = "Filled.CloudOff20", 20f) {
      materialPath {
          moveTo(2.853F, 2.147F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineToRelative(3.67F, 3.668F)
          curveTo(5.568F, 7.05F, 5.413F, 7.633F, 5.352F, 8.246F)
          horizontalLineToRelative(-0.07F)
          curveTo(3.468F, 8.246F, 2.0F, 9.758F, 2.0F, 11.623F)
          curveTo(2.0F, 13.488F, 3.47F, 15.0F, 5.282F, 15.0F)
          horizontalLineToRelative(9.01F)
          lineToRelative(2.854F, 2.854F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-15.0F, -15.0F)
          close()
          moveTo(18.0F, 11.623F)
          curveToRelative(0.0F, 1.168F, -0.576F, 2.197F, -1.452F, 2.804F)
          lineToRelative(-9.49F, -9.49F)
          curveTo(7.808F, 4.352F, 8.792F, 4.0F, 10.0F, 4.0F)
          curveToRelative(2.817F, 0.0F, 4.415F, 1.923F, 4.647F, 4.246F)
          horizontalLineToRelative(0.07F)
          curveToRelative(1.814F, 0.0F, 3.283F, 1.512F, 3.283F, 3.377F)
          close()        
      }
    }
    return _cloudOff20!!
  }

private var _cloudOff20: ImageVector? = null
