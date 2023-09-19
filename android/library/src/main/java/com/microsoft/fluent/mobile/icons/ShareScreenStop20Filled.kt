package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ShareScreenStop20: ImageVector
  get() {
    if (_shareScreenStop20 != null) {
      return _shareScreenStop20!!
    }
    _shareScreenStop20 = fluentIcon(name = "Filled.ShareScreenStop20", 20f) {
      materialPath {
          moveTo(4.5F, 4.0F)
          curveTo(3.12F, 4.0F, 2.0F, 5.12F, 2.0F, 6.5F)
          verticalLineToRelative(7.0F)
          curveTo(2.0F, 14.88F, 3.12F, 16.0F, 4.5F, 16.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-7.0F)
          curveTo(18.0F, 5.12F, 16.88F, 4.0F, 15.5F, 4.0F)
          horizontalLineToRelative(-11.0F)
          close()
          moveToRelative(2.646F, 3.146F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineTo(10.0F, 9.293F)
          lineToRelative(2.146F, -2.146F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(10.707F, 10.0F)
          lineToRelative(2.147F, 2.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineTo(10.0F, 10.707F)
          lineToRelative(-2.146F, 2.147F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(9.293F, 10.0F)
          lineTo(7.147F, 7.854F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _shareScreenStop20!!
  }

private var _shareScreenStop20: ImageVector? = null
