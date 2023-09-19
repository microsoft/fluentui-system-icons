package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Library24: ImageVector
  get() {
    if (_library24 != null) {
      return _library24!!
    }
    _library24 = fluentIcon(name = "Filled.Library24", 24f) {
      materialPath {
          moveTo(5.5F, 3.0F)
          curveTo(6.328F, 3.0F, 7.0F, 3.672F, 7.0F, 4.5F)
          verticalLineToRelative(15.0F)
          curveTo(7.0F, 20.328F, 6.328F, 21.0F, 5.5F, 21.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(2.672F, 21.0F, 2.0F, 20.328F, 2.0F, 19.5F)
          verticalLineToRelative(-15.0F)
          curveTo(2.0F, 3.672F, 2.672F, 3.0F, 3.5F, 3.0F)
          horizontalLineToRelative(2.0F)
          close()
          moveToRelative(6.0F, 0.0F)
          curveTo(12.328F, 3.0F, 13.0F, 3.672F, 13.0F, 4.5F)
          verticalLineToRelative(15.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-2.0F)
          curveTo(8.672F, 21.0F, 8.0F, 20.328F, 8.0F, 19.5F)
          verticalLineToRelative(-15.0F)
          curveTo(8.0F, 3.672F, 8.672F, 3.0F, 9.5F, 3.0F)
          horizontalLineToRelative(2.0F)
          close()
          moveToRelative(7.281F, 3.124F)
          lineToRelative(3.214F, 12.519F)
          curveToRelative(0.206F, 0.802F, -0.277F, 1.62F, -1.08F, 1.826F)
          lineToRelative(-1.876F, 0.48F)
          curveToRelative(-0.803F, 0.207F, -1.62F, -0.276F, -1.826F, -1.08F)
          lineTo(13.999F, 7.354F)
          curveToRelative(-0.206F, -0.803F, 0.277F, -1.62F, 1.08F, -1.826F)
          lineToRelative(1.876F, -0.483F)
          curveToRelative(0.803F, -0.205F, 1.62F, 0.279F, 1.826F, 1.08F)
          close()        
      }
    }
    return _library24!!
  }

private var _library24: ImageVector? = null
