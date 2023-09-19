package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Document28: ImageVector
  get() {
    if (_document28 != null) {
      return _document28!!
    }
    _document28 = fluentIcon(name = "Filled.Document28", 28f) {
      materialPath {
          moveTo(14.0F, 2.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(7.999F)
          lineTo(24.0F, 12.078F)
          verticalLineTo(23.6F)
          curveToRelative(0.0F, 1.325F, -1.075F, 2.4F, -2.4F, 2.4F)
          horizontalLineTo(6.4F)
          curveTo(5.074F, 26.0F, 4.0F, 24.925F, 4.0F, 23.6F)
          verticalLineTo(4.4F)
          curveTo(4.0F, 3.074F, 5.074F, 2.0F, 6.4F, 2.0F)
          horizontalLineTo(14.0F)
          close()
          moveTo(15.5F, 2.475F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(7.502F)
          curveToRelative(-0.091F, -0.13F, -0.194F, -0.252F, -0.307F, -0.366F)
          lineToRelative(-7.431F, -7.431F)
          curveTo(15.68F, 2.62F, 15.593F, 2.544F, 15.5F, 2.475F)
          close()        
      }
    }
    return _document28!!
  }

private var _document28: ImageVector? = null
