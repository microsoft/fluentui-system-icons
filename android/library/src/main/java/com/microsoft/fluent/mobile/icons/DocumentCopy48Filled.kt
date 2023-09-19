package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentCopy48: ImageVector
  get() {
    if (_documentCopy48 != null) {
      return _documentCopy48!!
    }
    _documentCopy48 = fluentIcon(name = "Filled.DocumentCopy48", 48f) {
      materialPath {
          moveTo(25.0F, 14.75F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(-6.75F)
          curveTo(15.903F, 5.0F, 14.0F, 6.903F, 14.0F, 9.25F)
          verticalLineToRelative(24.5F)
          curveToRelative(0.0F, 2.347F, 1.903F, 4.25F, 4.25F, 4.25F)
          horizontalLineToRelative(16.5F)
          curveToRelative(2.347F, 0.0F, 4.25F, -1.903F, 4.25F, -4.25F)
          verticalLineTo(19.0F)
          horizontalLineToRelative(-9.75F)
          curveTo(26.903F, 19.0F, 25.0F, 17.097F, 25.0F, 14.75F)
          close()
          moveToRelative(2.5F, 0.0F)
          verticalLineTo(5.5F)
          lineToRelative(11.0F, 11.0F)
          horizontalLineToRelative(-9.25F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          close()
          moveTo(9.0F, 13.7F)
          curveToRelative(0.0F, -1.679F, 1.034F, -3.116F, 2.5F, -3.71F)
          verticalLineToRelative(23.76F)
          curveToRelative(0.0F, 3.728F, 3.022F, 6.75F, 6.75F, 6.75F)
          horizontalLineToRelative(15.76F)
          curveToRelative(-0.594F, 1.466F, -2.031F, 2.5F, -3.71F, 2.5F)
          horizontalLineTo(18.25F)
          curveTo(13.141F, 43.0F, 9.0F, 38.859F, 9.0F, 33.75F)
          verticalLineTo(13.7F)
          close()        
      }
    }
    return _documentCopy48!!
  }

private var _documentCopy48: ImageVector? = null
