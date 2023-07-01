package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MatchAppLayout24: ImageVector
  get() {
    if (_matchAppLayout24 != null) {
      return _matchAppLayout24!!
    }
    _matchAppLayout24 = fluentIcon(name = "Filled.MatchAppLayout24", 24f) {
      materialPath {
          moveTo(9.5F, 8.0F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineTo(3.75F)
          curveTo(2.784F, 16.0F, 2.0F, 15.216F, 2.0F, 14.25F)
          verticalLineToRelative(-4.5F)
          curveToRelative(0.0F, -0.918F, 0.707F, -1.671F, 1.607F, -1.744F)
          lineTo(3.75F, 8.0F)
          horizontalLineTo(9.5F)
          close()
          moveToRelative(10.75F, 0.0F)
          curveTo(21.216F, 8.0F, 22.0F, 8.784F, 22.0F, 9.75F)
          verticalLineToRelative(4.5F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineTo(14.5F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          verticalLineToRelative(-4.5F)
          curveTo(12.75F, 8.784F, 13.534F, 8.0F, 14.5F, 8.0F)
          horizontalLineToRelative(5.75F)
          close()        
      }
    }
    return _matchAppLayout24!!
  }

private var _matchAppLayout24: ImageVector? = null
