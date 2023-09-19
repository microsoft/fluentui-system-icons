package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WebAsset16: ImageVector
  get() {
    if (_webAsset16 != null) {
      return _webAsset16!!
    }
    _webAsset16 = fluentIcon(name = "Filled.WebAsset16", 16f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-7.0F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveTo(5.0F, 5.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(11.276F, 6.0F, 11.0F, 6.0F)
          horizontalLineTo(5.0F)
          curveTo(4.724F, 6.0F, 4.5F, 5.776F, 4.5F, 5.5F)
          reflectiveCurveTo(4.724F, 5.0F, 5.0F, 5.0F)
          close()        
      }
    }
    return _webAsset16!!
  }

private var _webAsset16: ImageVector? = null
