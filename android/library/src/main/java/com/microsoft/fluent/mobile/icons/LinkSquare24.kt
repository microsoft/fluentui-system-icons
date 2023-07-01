package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LinkSquare24: ImageVector
  get() {
    if (_linkSquare24 != null) {
      return _linkSquare24!!
    }
    _linkSquare24 = fluentIcon(name = "Regular.LinkSquare24", 24f) {
      materialPath {
          moveTo(6.25F, 3.0F)
          curveTo(4.455F, 3.0F, 3.0F, 4.455F, 3.0F, 6.25F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.795F, 1.455F, 3.25F, 3.25F, 3.25F)
          horizontalLineTo(7.5F)
          verticalLineTo(14.0F)
          horizontalLineTo(6.25F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          verticalLineToRelative(-6.0F)
          curveToRelative(0.0F, -0.966F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(6.0F)
          curveTo(13.216F, 4.5F, 14.0F, 5.284F, 14.0F, 6.25F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(1.5F)
          horizontalLineToRelative(1.25F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineToRelative(-6.0F)
          curveTo(15.5F, 4.455F, 14.045F, 3.0F, 12.25F, 3.0F)
          horizontalLineToRelative(-6.0F)
          close()
          moveTo(10.0F, 11.75F)
          curveToRelative(0.0F, -0.966F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(1.248F)
          verticalLineTo(8.5F)
          horizontalLineTo(11.75F)
          curveToRelative(-1.795F, 0.0F, -3.25F, 1.455F, -3.25F, 3.25F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.795F, 1.455F, 3.25F, 3.25F, 3.25F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineToRelative(-6.0F)
          curveToRelative(0.0F, -1.795F, -1.455F, -3.25F, -3.25F, -3.25F)
          horizontalLineTo(16.5F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(1.25F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineToRelative(-6.0F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          verticalLineToRelative(-6.0F)
          close()        
      }
    }
    return _linkSquare24!!
  }

private var _linkSquare24: ImageVector? = null
