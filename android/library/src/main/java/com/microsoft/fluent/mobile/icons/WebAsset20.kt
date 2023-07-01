package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.WebAsset20: ImageVector
  get() {
    if (_webAsset20 != null) {
      return _webAsset20!!
    }
    _webAsset20 = fluentIcon(name = "Filled.WebAsset20", 20f) {
      materialPath {
          moveTo(3.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(3.5F, 0.0F)
          curveTo(6.224F, 6.0F, 6.0F, 6.224F, 6.0F, 6.5F)
          reflectiveCurveTo(6.224F, 7.0F, 6.5F, 7.0F)
          horizontalLineToRelative(7.0F)
          curveTo(13.776F, 7.0F, 14.0F, 6.776F, 14.0F, 6.5F)
          reflectiveCurveTo(13.776F, 6.0F, 13.5F, 6.0F)
          horizontalLineToRelative(-7.0F)
          close()        
      }
    }
    return _webAsset20!!
  }

private var _webAsset20: ImageVector? = null
