package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Document48: ImageVector
  get() {
    if (_document48 != null) {
      return _document48!!
    }
    _document48 = fluentIcon(name = "Filled.Document48", 48f) {
      materialPath {
          moveTo(24.0F, 4.0F)
          verticalLineToRelative(11.25F)
          curveToRelative(0.0F, 2.071F, 1.679F, 3.75F, 3.75F, 3.75F)
          horizontalLineTo(40.0F)
          verticalLineToRelative(21.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(11.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(13.0F)
          close()
          moveToRelative(2.5F, 0.464F)
          verticalLineTo(15.25F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(11.712F)
          lineTo(26.5F, 4.464F)
          close()        
      }
    }
    return _document48!!
  }

private var _document48: ImageVector? = null
