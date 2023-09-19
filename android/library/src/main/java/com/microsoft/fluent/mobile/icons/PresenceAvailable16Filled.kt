package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PresenceAvailable16: ImageVector
  get() {
    if (_presenceAvailable16 != null) {
      return _presenceAvailable16!!
    }
    _presenceAvailable16 = fluentIcon(name = "Filled.PresenceAvailable16", 16f) {
      materialPath {
          moveTo(8.0F, 16.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          reflectiveCurveToRelative(-8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          close()
          moveToRelative(3.707F, -9.293F)
          lineToRelative(-4.003F, 4.0F)
          curveTo(7.516F, 10.895F, 7.262F, 11.0F, 6.996F, 11.0F)
          curveToRelative(-0.265F, 0.0F, -0.52F, -0.106F, -0.707F, -0.293F)
          lineToRelative(-1.997F, -2.0F)
          curveToRelative(-0.39F, -0.391F, -0.39F, -1.025F, 0.002F, -1.415F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.002F)
          lineToRelative(1.29F, 1.292F)
          lineToRelative(3.295F, -3.293F)
          curveToRelative(0.39F, -0.39F, 1.024F, -0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, 0.39F, 0.39F, 1.024F, 0.0F, 1.414F)
          close()        
      }
    }
    return _presenceAvailable16!!
  }

private var _presenceAvailable16: ImageVector? = null
