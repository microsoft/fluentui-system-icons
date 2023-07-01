package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentBorder24: ImageVector
  get() {
    if (_documentBorder24 != null) {
      return _documentBorder24!!
    }
    _documentBorder24 = fluentIcon(name = "Filled.DocumentBorder24", 24f) {
      materialPath {
          moveTo(7.25F, 2.0F)
          curveTo(5.455F, 2.0F, 4.0F, 3.455F, 4.0F, 5.25F)
          verticalLineToRelative(13.5F)
          curveTo(4.0F, 20.545F, 5.455F, 22.0F, 7.25F, 22.0F)
          horizontalLineToRelative(9.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(5.25F)
          curveTo(20.0F, 3.455F, 18.545F, 2.0F, 16.75F, 2.0F)
          horizontalLineToRelative(-9.5F)
          close()
          moveTo(5.5F, 5.25F)
          curveToRelative(0.0F, -0.966F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(9.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          verticalLineToRelative(13.5F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineToRelative(-9.5F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          verticalLineTo(5.25F)
          close()
          moveTo(8.0F, 5.0F)
          curveTo(7.448F, 5.0F, 7.0F, 5.448F, 7.0F, 6.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(8.0F)
          close()        
      }
    }
    return _documentBorder24!!
  }

private var _documentBorder24: ImageVector? = null
