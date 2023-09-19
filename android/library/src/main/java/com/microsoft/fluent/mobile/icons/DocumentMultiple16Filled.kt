package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentMultiple16: ImageVector
  get() {
    if (_documentMultiple16 != null) {
      return _documentMultiple16!!
    }
    _documentMultiple16 = fluentIcon(name = "Filled.DocumentMultiple16", 16f) {
      materialPath {
          moveTo(14.0F, 6.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(5.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(4.21F)
          curveToRelative(2.093F, 0.0F, 3.79F, -1.697F, 3.79F, -3.79F)
          verticalLineTo(6.0F)
          close()
          moveTo(7.0F, 1.0F)
          verticalLineToRelative(3.5F)
          curveTo(7.0F, 5.328F, 7.672F, 6.0F, 8.5F, 6.0F)
          horizontalLineToRelative(3.502F)
          verticalLineToRelative(5.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(4.5F)
          curveTo(3.672F, 13.0F, 3.0F, 12.328F, 3.0F, 11.5F)
          verticalLineToRelative(-9.0F)
          curveTo(3.0F, 1.672F, 3.672F, 1.0F, 4.5F, 1.0F)
          horizontalLineTo(7.0F)
          close()
          moveToRelative(1.0F, 0.25F)
          verticalLineTo(4.5F)
          curveTo(8.0F, 4.776F, 8.224F, 5.0F, 8.5F, 5.0F)
          horizontalLineToRelative(3.25F)
          lineTo(8.0F, 1.25F)
          close()        
      }
    }
    return _documentMultiple16!!
  }

private var _documentMultiple16: ImageVector? = null
