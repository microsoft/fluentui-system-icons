package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChatEmpty32: ImageVector
  get() {
    if (_chatEmpty32 != null) {
      return _chatEmpty32!!
    }
    _chatEmpty32 = fluentIcon(name = "Regular.ChatEmpty32", 32f) {
      materialPath {
          moveTo(16.0F, 4.0F)
          curveTo(9.373F, 4.0F, 4.0F, 9.373F, 4.0F, 16.0F)
          curveToRelative(0.0F, 2.165F, 0.572F, 4.193F, 1.573F, 5.945F)
          curveToRelative(0.134F, 0.233F, 0.168F, 0.51F, 0.094F, 0.77F)
          lineToRelative(-1.439F, 5.059F)
          lineToRelative(5.061F, -1.44F)
          curveToRelative(0.259F, -0.073F, 0.536F, -0.039F, 0.77F, 0.094F)
          curveTo(11.808F, 27.428F, 13.835F, 28.0F, 16.0F, 28.0F)
          curveToRelative(6.628F, 0.0F, 12.0F, -5.373F, 12.0F, -12.0F)
          reflectiveCurveTo(22.628F, 4.0F, 16.0F, 4.0F)
          close()
          moveTo(2.0F, 16.0F)
          curveTo(2.0F, 8.268F, 8.268F, 2.0F, 16.0F, 2.0F)
          reflectiveCurveToRelative(14.0F, 6.268F, 14.0F, 14.0F)
          reflectiveCurveToRelative(-6.268F, 14.0F, -14.0F, 14.0F)
          curveToRelative(-2.368F, 0.0F, -4.602F, -0.589F, -6.56F, -1.629F)
          lineToRelative(-5.528F, 1.572F)
          curveToRelative(-1.13F, 0.322F, -2.174F, -0.723F, -1.853F, -1.853F)
          lineToRelative(1.572F, -5.527F)
          curveTo(2.59F, 20.605F, 2.0F, 18.37F, 2.0F, 16.0F)
          close()        
      }
    }
    return _chatEmpty32!!
  }

private var _chatEmpty32: ImageVector? = null
