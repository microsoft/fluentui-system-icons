package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentCopy20: ImageVector
  get() {
    if (_documentCopy20 != null) {
      return _documentCopy20!!
    }
    _documentCopy20 = fluentIcon(name = "Filled.DocumentCopy20", 20f) {
      materialPath {
          moveTo(11.0F, 6.5F)
          verticalLineTo(2.0F)
          horizontalLineTo(7.5F)
          curveTo(6.672F, 2.0F, 6.0F, 2.672F, 6.0F, 3.5F)
          verticalLineToRelative(11.0F)
          curveTo(6.0F, 15.328F, 6.672F, 16.0F, 7.5F, 16.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(-4.5F)
          curveTo(11.672F, 8.0F, 11.0F, 7.328F, 11.0F, 6.5F)
          close()
          moveToRelative(1.0F, 0.0F)
          verticalLineTo(2.25F)
          lineTo(16.75F, 7.0F)
          horizontalLineTo(12.5F)
          curveTo(12.224F, 7.0F, 12.0F, 6.776F, 12.0F, 6.5F)
          close()
          moveTo(4.0F, 5.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          verticalLineToRelative(10.5F)
          curveTo(5.0F, 15.88F, 6.12F, 17.0F, 7.5F, 17.0F)
          horizontalLineTo(15.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(7.548F)
          curveTo(5.588F, 18.0F, 4.0F, 16.411F, 4.0F, 14.452F)
          verticalLineTo(5.0F)
          close()        
      }
    }
    return _documentCopy20!!
  }

private var _documentCopy20: ImageVector? = null
