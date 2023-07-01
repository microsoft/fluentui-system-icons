package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CloudWords16: ImageVector
  get() {
    if (_cloudWords16 != null) {
      return _cloudWords16!!
    }
    _cloudWords16 = fluentIcon(name = "Filled.CloudWords16", 16f) {
      materialPath {
          moveTo(8.0F, 3.0F)
          curveTo(5.958F, 3.0F, 4.273F, 4.53F, 4.03F, 6.507F)
          curveTo(2.338F, 6.62F, 1.0F, 8.03F, 1.0F, 9.75F)
          curveTo(1.0F, 11.545F, 2.455F, 13.0F, 4.25F, 13.0F)
          horizontalLineToRelative(7.5F)
          curveTo(13.545F, 13.0F, 15.0F, 11.545F, 15.0F, 9.75F)
          curveToRelative(0.0F, -1.721F, -1.338F, -3.13F, -3.03F, -3.243F)
          curveTo(11.727F, 4.531F, 10.042F, 3.0F, 8.0F, 3.0F)
          close()
          moveTo(7.0F, 6.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(9.276F, 7.0F, 9.0F, 7.0F)
          horizontalLineTo(7.0F)
          curveTo(6.724F, 7.0F, 6.5F, 6.776F, 6.5F, 6.5F)
          reflectiveCurveTo(6.724F, 6.0F, 7.0F, 6.0F)
          close()
          moveTo(4.0F, 9.5F)
          curveTo(4.0F, 9.224F, 4.224F, 9.0F, 4.5F, 9.0F)
          horizontalLineToRelative(2.0F)
          curveTo(6.776F, 9.0F, 7.0F, 9.224F, 7.0F, 9.5F)
          reflectiveCurveTo(6.776F, 10.0F, 6.5F, 10.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(4.224F, 10.0F, 4.0F, 9.776F, 4.0F, 9.5F)
          close()
          moveTo(9.5F, 9.0F)
          horizontalLineToRelative(2.0F)
          curveTo(11.776F, 9.0F, 12.0F, 9.224F, 12.0F, 9.5F)
          reflectiveCurveTo(11.776F, 10.0F, 11.5F, 10.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(9.224F, 10.0F, 9.0F, 9.776F, 9.0F, 9.5F)
          reflectiveCurveTo(9.224F, 9.0F, 9.5F, 9.0F)
          close()        
      }
    }
    return _cloudWords16!!
  }

private var _cloudWords16: ImageVector? = null
