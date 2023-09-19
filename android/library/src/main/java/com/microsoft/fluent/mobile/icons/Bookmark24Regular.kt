package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Bookmark24: ImageVector
  get() {
    if (_bookmark24 != null) {
      return _bookmark24!!
    }
    _bookmark24 = fluentIcon(name = "Regular.Bookmark24", 24f) {
      materialPath {
          moveTo(6.19F, 21.855F)
          curveToRelative(-0.495F, 0.357F, -1.187F, 0.002F, -1.187F, -0.61F)
          verticalLineTo(6.25F)
          curveTo(5.003F, 4.455F, 6.458F, 3.0F, 8.253F, 3.0F)
          horizontalLineToRelative(7.498F)
          curveToRelative(1.795F, 0.0F, 3.25F, 1.455F, 3.25F, 3.25F)
          verticalLineToRelative(14.996F)
          curveToRelative(0.0F, 0.611F, -0.692F, 0.966F, -1.188F, 0.609F)
          lineToRelative(-5.81F, -4.181F)
          lineToRelative(-5.812F, 4.18F)
          close()
          moveTo(17.502F, 6.25F)
          curveToRelative(0.0F, -0.966F, -0.783F, -1.75F, -1.75F, -1.75F)
          horizontalLineTo(8.253F)
          curveToRelative(-0.967F, 0.0F, -1.75F, 0.784F, -1.75F, 1.75F)
          verticalLineToRelative(13.532F)
          lineToRelative(5.061F, -3.641F)
          curveToRelative(0.262F, -0.188F, 0.614F, -0.188F, 0.876F, 0.0F)
          lineToRelative(5.061F, 3.641F)
          verticalLineTo(6.25F)
          close()        
      }
    }
    return _bookmark24!!
  }

private var _bookmark24: ImageVector? = null
