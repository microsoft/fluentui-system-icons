package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TableBottomRow24: ImageVector
  get() {
    if (_tableBottomRow24 != null) {
      return _tableBottomRow24!!
    }
    _tableBottomRow24 = fluentIcon(name = "Regular.TableBottomRow24", 24f) {
      materialPath {
          moveTo(6.25F, 3.0F)
          curveTo(4.455F, 3.0F, 3.0F, 4.455F, 3.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveTo(3.0F, 19.545F, 4.455F, 21.0F, 6.25F, 21.0F)
          horizontalLineToRelative(11.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(6.25F)
          curveTo(21.0F, 4.455F, 19.545F, 3.0F, 17.75F, 3.0F)
          horizontalLineTo(6.25F)
          close()
          moveTo(4.5F, 6.25F)
          curveToRelative(0.0F, -0.966F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(11.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          verticalLineTo(14.0F)
          horizontalLineToRelative(-15.0F)
          verticalLineTo(6.25F)
          close()
          moveTo(10.0F, 15.5F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(-4.0F)
          verticalLineToRelative(-4.0F)
          close()
          moveToRelative(7.75F, 4.0F)
          horizontalLineTo(15.5F)
          verticalLineToRelative(-4.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(2.25F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          close()
          moveTo(4.5F, 17.75F)
          verticalLineTo(15.5F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(6.25F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          close()        
      }
    }
    return _tableBottomRow24!!
  }

private var _tableBottomRow24: ImageVector? = null
