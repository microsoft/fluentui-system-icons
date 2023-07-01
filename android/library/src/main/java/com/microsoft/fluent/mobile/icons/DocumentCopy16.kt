package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentCopy16: ImageVector
  get() {
    if (_documentCopy16 != null) {
      return _documentCopy16!!
    }
    _documentCopy16 = fluentIcon(name = "Filled.DocumentCopy16", 16f) {
      materialPath {
          moveTo(8.998F, 4.5F)
          verticalLineTo(1.0F)
          horizontalLineToRelative(-2.5F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineTo(12.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(-3.502F)
          curveToRelative(-0.828F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          close()
          moveToRelative(1.0F, 0.0F)
          verticalLineTo(1.25F)
          lineTo(13.748F, 5.0F)
          horizontalLineToRelative(-3.25F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          close()
          moveTo(3.0F, 4.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          verticalLineToRelative(8.5F)
          curveTo(4.0F, 12.88F, 5.12F, 14.0F, 6.5F, 14.0F)
          horizontalLineTo(12.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(6.556F)
          curveTo(4.592F, 15.0F, 3.0F, 13.408F, 3.0F, 11.444F)
          verticalLineTo(4.0F)
          close()        
      }
    }
    return _documentCopy16!!
  }

private var _documentCopy16: ImageVector? = null
